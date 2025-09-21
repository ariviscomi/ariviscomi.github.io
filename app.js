// Nombre de usuario/repositorio (opcional): si quieres que el README.md se cargue desde raw.githubusercontent,
		// define GITHUB_USER y REPO. Si no, el script intentará cargar "/README.md" (útil en GitHub Pages).
		const GITHUB_USER = 'ariviscomi'; // cambia si tu usuario es distinto
		const REPO = 'ariviscomi.github.io'; // cambia si tu repo es distinto (o deja vacío)

		// PROYECTOS: reemplaza con tus proyectos reales
		// Cada objeto: title, description, tags (array), url (opcional), image (opcional)
		const PROYECTOS_DATA = [
			{
				title: 'Portfolio moderno',
				description: 'Sitio estático con animaciones sutiles y diseño responsive.',
				tags: ['HTML','CSS','JS'],
				url: '#'
			},
			{
				title: 'App de tareas',
				description: 'SPA para gestionar tareas con localStorage y UI accesible.',
				tags: ['React','JS','UX'],
				url: '#'
			},
			{
				title: 'Ecommerce demo',
				description: 'Mockup de tienda con carrito y diseño móvil primero.',
				tags: ['Design','Stripe','Responsive'],
				url: '#'
			}
		];

		// RENDER PROYECTOS
		const projectsGrid = document.getElementById('projects-grid');
		function renderProjects(){
			projectsGrid.innerHTML = '';
			PROYECTOS_DATA.forEach(p=>{
				const el = document.createElement('article');
				el.className = 'project';
				el.innerHTML = `
					<div class="thumb" aria-hidden>
						<!-- Placeholder visual -->
						<svg width="120" height="80" viewBox="0 0 120 80" fill="none"><rect width="120" height="80" rx="8" fill="#061829"></rect><path d="M10 60h100" stroke="#0ea5a3" stroke-width="2" stroke-linecap="round"/></svg>
					</div>
					<div>
						<h4>${escapeHtml(p.title)}</h4>
						<p>${escapeHtml(p.description)}</p>
						<div style="margin-top:8px;display:flex;justify-content:space-between;align-items:center">
							<div class="tags">${p.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
							<div style="display:flex;gap:8px">
								<a href="${p.url || '#'}" class="btn" style="padding:8px 10px;font-size:13px" target="_blank" rel="noopener">Ver</a>
							</div>
						</div>
					</div>
				`;
				projectsGrid.appendChild(el);
			});
		}

		// Basic markdown -> HTML (muy ligero). Convierte headers, links, lists, code blocks y paragraphs.
		function simpleMarkdownToHtml(md){
			if(!md) return '';
			// Escapa HTML primero
			let out = md.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
			// code blocks ```...``` (block)
			out = out.replace(/```([\s\S]*?)```/g, function(m, code){ return '<pre style="background:#021421;padding:12px;border-radius:8px;color:#b9e6ff;overflow:auto"><code>' + code.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</code></pre>';});
			// headers
			out = out.replace(/^### (.*$)/gim, '<h4>$1</h4>');
			out = out.replace(/^## (.*$)/gim, '<h3>$1</h3>');
			out = out.replace(/^# (.*$)/gim, '<h2>$1</h2>');
			// bold and italic (simple)
			out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
			out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');
			// links [text](url)
			out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
			// ul
			out = out.replace(/^\s*[\*\-] (.*)$/gim, '<li>$1</li>');
			out = out.replace(/(<li>[\s\S]*?<\/li>)/g, function(m){
				// Only wrap contiguous li blocks into <ul>
				if(!m.startsWith('<ul>')) return '<ul style="margin:8px 0 8px 20px">'+m+'</ul>';
				return m;
			});
			// paragraphs
			out = out.replace(/^\s*([\w\W]+?)\s*$/gm, function(m){
				if(/^<h|^<ul|^<pre|^<p|^<blockquote|^<img|^<div|^<a|^<code/.test(m)) return m;
				if(/^\s*$/.test(m)) return '';
				return '<p>' + m + '</p>';
			});
			return out;
		}

		// Intenta cargar README.md (local en GitHub Pages) o desde raw.githubusercontent si REPO definido.
		async function loadReadme(){
			const target = (typeof REPO === 'string' && REPO.trim()) ? `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO}/main/README.md` : '/README.md';
			try{
				const res = await fetch(target);
				if(!res.ok) throw new Error('No encontrado');
				const md = await res.text();
				document.getElementById('readme-content').innerHTML = simpleMarkdownToHtml(md);
			}catch(e){
				// Intentar alternativa: raw.githubusercontent con user only
				if(!REPO && GITHUB_USER){
					try{
						const alt = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_USER}.github.io/main/README.md`;
						const res2 = await fetch(alt);
						if(res2.ok){
							const md2 = await res2.text();
							document.getElementById('readme-content').innerHTML = simpleMarkdownToHtml(md2);
							return;
						}
					}catch(err){}
				}
				document.getElementById('readme-content').innerHTML = '<p class="muted">No se encontró README.md. Puedes colocar un README.md en la raíz del repositorio para que su contenido aparezca aquí automáticamente.</p>';
			}
		}

		// NAV behavior and scroll reveal
		document.addEventListener('DOMContentLoaded', function(){
			renderProjects();
			loadReadme();

			// smooth scroll for nav
			document.querySelectorAll('nav a, #view-projects').forEach(el=>{
				el.addEventListener('click', function(e){
					e.preventDefault();
					const href = (this.getAttribute('href') === '#') ? '#projects' : (this.getAttribute('href') || '#projects');
					const target = document.querySelector(href) || document.getElementById('projects');
					if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
				});
			});

			// reveal on scroll
			const obs = new IntersectionObserver(entries=>{
				entries.forEach(entry=>{
					if(entry.isIntersecting){
						entry.target.classList.add('visible');
					}
				});
			}, {threshold: 0.12});
			document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

			// nav active state
			const sections = document.querySelectorAll('main section[id]');
			const navLinks = document.querySelectorAll('nav a');
			const obs2 = new IntersectionObserver(entries=>{
				entries.forEach(entry=>{
					const id = entry.target.id;
					const link = document.querySelector('nav a[href="#' + id + '"]');
					if(entry.isIntersecting){
						navLinks.forEach(n=>n.classList.remove('active'));
						if(link) link.classList.add('active');
					}
				});
			}, {threshold: 0.35});
			sections.forEach(s=>obs2.observe(s));

			// contact form: open mailto
			const form = document.getElementById('contact-form');
			form.addEventListener('submit', function(e){
				e.preventDefault();
				const data = new FormData(form);
				const name = data.get('name') || '';
				const email = data.get('email') || '';
				const message = data.get('message') || '';
				const subject = encodeURIComponent('Contacto desde portfolio: ' + name);
				const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
				window.location.href = `mailto:tu@email.com?subject=${subject}&body=${body}`;
			});

			// year
			document.getElementById('year').textContent = new Date().getFullYear();
		});

		// pequeña utilidad
		function escapeHtml(s){
			return (s+'').replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];});
		}