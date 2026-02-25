const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'Admin', 'admin');
const destDir = path.join(__dirname, 'src', 'AdminPages');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function camelCase(str) {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

function processPHP(content, filename) {
    if (filename === 'sidebar.php') return convertSidebar(content);
    if (filename === 'pageHeader.php') return convertPageHeader();

    // Extract body if exists
    let body = content;
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        body = bodyMatch[1];
    }

    // Convert basic HTML to JSX
    let jsx = body;

    // 1. Convert class to className
    jsx = jsx.replace(/\bclass="/g, 'className="');

    // 2. Convert for to htmlFor
    jsx = jsx.replace(/\bfor="/g, 'htmlFor="');

    // 3. Fix simple style attributes (quick hack for style="...")
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        let styles = {};
        p1.split(';').forEach(s => {
            if (s.trim()) {
                let [key, val] = s.split(':');
                if (key && val) {
                    let camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styles[camelKey] = val.trim();
                }
            }
        });
        return `style={${JSON.stringify(styles)}}`;
    });

    // 4. Close self-closing tags
    const selfClosingTags = ['img', 'input', 'hr', 'br', 'source'];
    selfClosingTags.forEach(tag => {
        const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });

    // Replace PHP components
    jsx = jsx.replace(/<\?php\s*include\s*'sidebar\.php';\s*\?>/g, '<Sidebar />');

    // Replace PageHeader block
    jsx = jsx.replace(/<\?php[\s\S]*?\$breadcrumb\s*=\s*['"]([^'"]+)['"];[\s\S]*?\$title\s*=\s*['"]([^'"]+)['"];[\s\S]*?include\s*'pageHeader\.php';[\s\S]*?\?>/g,
        '<PageHeader breadcrumb="$1" title="$2" />');

    // Clean up any remaining PHP
    jsx = jsx.replace(/<\?php[\s\S]*?\?>/g, '');

    // Replace <path ...></path> to <path ... />
    jsx = jsx.replace(/<path([^>]+)><\/path>/g, '<path$1 />');

    // Convert common SVG attributes
    const svgAttrs = [
        'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule',
        'clip-rule', 'viewbox', 'preserveaspectratio'
    ];
    svgAttrs.forEach(attr => {
        const regex = new RegExp(`\\b${attr}=`, 'gi');
        const correct = attr === 'viewbox' ? 'viewBox' :
            attr === 'preserveaspectratio' ? 'preserveAspectRatio' :
                camelCase(attr);
        jsx = jsx.replace(regex, `${correct}=`);
    });

    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '{/* $& */}');

    return jsx;
}

function convertSidebar(content) {
    return `import React from 'react';

const Sidebar = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard';

    const isActive = (page) => {
        const menuPages = ['menumanage', 'addnewdish', 'addNewCategory'];
        if (page === 'menumanage' && menuPages.includes(currentPage)) return true;
        
        const reportPages = ['exportReport', 'reportgenrate'];
        if (page === 'reportgenrate' && reportPages.includes(currentPage)) return true;
        
        return currentPage === page;
    };

    const getLinkClass = (page) => {
        if (isActive(page)) {
            return 'flex items-center gap-3 px-4 py-3 rounded-[14px] bg-[#c67c7c] text-white shadow-lg shadow-[#c67c7c]/20 transition-all duration-300 ease-out';
        }
        return 'flex items-center gap-3 px-4 py-3 rounded-[14px] text-[#707070] hover:bg-white transition-all duration-300 ease-out group';
    };

    const getSvgClass = (page) => {
        if (isActive(page)) {
            return 'w-5 h-5';
        }
        return 'w-5 h-5 group-hover:text-[#c67c7c]';
    };

    return (
        <>
            <aside className="fixed inset-y-0 left-0 w-64 bg-[#f4efec] border-r border-[#e5e0dd] flex flex-col z-[60]">
                <div className="p-8 pb-12">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#c67c7c]/20 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-[#c67c7c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-lg font-serif font-bold tracking-tighter text-[#2b2b2b] leading-none">LUXE</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[#c67c7c]">Rose Edition Admin</div>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <a className={getLinkClass('dashboard')} href="/admin/dashboard">
                        <span className="text-sm font-medium">Dashboard</span>
                    </a>
                    <a className={getLinkClass('menumanage')} href="/admin/menumanage">
                        <span className="text-sm font-medium">Menu Management</span>
                    </a>
                    <a className={getLinkClass('reservation')} href="/admin/reservation">
                        <span className="text-sm font-medium">Reservations</span>
                    </a>
                    <a className={getLinkClass('feedback')} href="/admin/feedback">
                        <span className="text-sm font-medium">Feedback</span>
                    </a>
                    <a className={getLinkClass('reportgenrate')} href="/admin/reportgenrate">
                        <span className="text-sm font-medium">Reports</span>
                    </a>
                    <a className={getLinkClass('setting')} href="/admin/setting">
                        <span className="text-sm font-medium">Settings</span>
                    </a>
                </nav>
                <div className="p-4 border-t border-[#e5e0dd] mt-auto">
                    <a className="flex items-center gap-3 px-4 py-3 rounded-[14px] text-[#c67c7c] hover:bg-[#c67c7c]/5 transition-all duration-300 ease-out" href="/admin/login">
                        <span className="text-sm font-medium">Logout</span>
                    </a>
                </div>
            </aside>
            <div className="w-64 shrink-0"></div>
        </>
    );
};
export default Sidebar;
`;
}

function convertPageHeader() {
    return `import React from 'react';

const PageHeader = ({ breadcrumb = "DASHBOARD / PAGE", title = "Page Title" }) => {
    const parts = breadcrumb.split('/');
    let part1 = parts[0] ? parts[0].trim() : 'DASHBOARD';
    let part2 = parts[1] ? parts[1].trim() : '';

    if (!part2) {
        part2 = part1;
        part1 = 'DASHBOARD';
    }

    return (
        <div data-purpose="header-title-container">
            <nav className="text-xs uppercase tracking-[0.2em] text-[#c67c7c] mb-2 flex items-center gap-2" style={{ fontFamily: "'Inter', 'Public Sans', sans-serif" }}>
                <span>{part1}</span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-400">{part2}</span>
            </nav>
            <h1 className="text-3xl text-[#2b2b2b] tracking-wide font-bold" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>{title}</h1>
        </div>
    );
};

export default PageHeader;
`;
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    if (file.endsWith('.php') || file.endsWith('.txt')) {
        let name = file.split('.')[0];
        let ComponentName = name.charAt(0).toUpperCase() + name.slice(1);

        const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        let jsxContent;

        if (file === 'sidebar.php' || file === 'pageHeader.php') {
            jsxContent = processPHP(content, file);
        } else {
            let innerJsx = processPHP(content, file);

            // Extract <script>...</script>
            let scripts = '';
            innerJsx = innerJsx.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (match, scriptContent) => {
                scripts += scriptContent + '\n';
                return '';
            });

            // Remove DOMContentLoaded wrappers ONLY if present
            if (/document\.addEventListener\(['"]DOMContentLoaded['"]/.test(scripts)) {
                scripts = scripts.replace(/document\.addEventListener\(['"]DOMContentLoaded['"],\s*function\s*\(\)\s*\{/gi, '');
                scripts = scripts.replace(/document\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{/gi, '');
                scripts = scripts.replace(/\}\)\;?\s*$/g, '');
            }

            // Clean up unescaped XML stuff from JSX strings that breaks React compiler
            innerJsx = innerJsx.replace(/<\?=.*?;\?>/g, '');
            innerJsx = innerJsx.replace(/<\?.*?;\?>/g, '');

            jsxContent = `import React, { useEffect } from 'react';\nimport Sidebar from './Sidebar';\nimport PageHeader from './PageHeader';\n\nconst ${ComponentName} = () => {\n  useEffect(() => {\n${scripts}\n  }, []);\n\n  return (\n    <div className="flex bg-[#f4efec] min-h-screen w-full">\n      ${innerJsx}\n    </div>\n  );\n}\n\nexport default ${ComponentName};`;
        }

        fs.writeFileSync(path.join(destDir, `${ComponentName}.jsx`), jsxContent);
        console.log(`Converted ${file} -> ${ComponentName}.jsx`);
    }
});
console.log("Done!");
