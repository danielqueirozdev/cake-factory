'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq]       = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const reveals = document.querySelectorAll('.reveal')
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target) } })
    }, { threshold: 0.07 })
    reveals.forEach(r => ro.observe(r))

    const links = document.querySelectorAll('a[href^="#"]')
    const handleClick = e => {
      const t = document.querySelector(e.currentTarget.getAttribute('href'))
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' }) }
    }
    links.forEach(a => a.addEventListener('click', handleClick))

    return () => { window.removeEventListener('scroll', onScroll); ro.disconnect(); links.forEach(a => a.removeEventListener('click', handleClick)) }
  }, [])

  const produtos = [
    { name: 'Bolo de Chocolate', desc: 'Massa fofinha com cobertura de ganache artesanal e raspas de chocolate belga.', price: 'R$89', img: '/bolo-chocolate.jpg' },
    { name: 'Bolo de Morango', desc: 'Camadas de chantilly fresco com morangos selecionados e calda especial.', price: 'R$94', img: '/bolo-morango.jpg' },
    { name: 'Bolo Premium', desc: 'Nossa criação exclusiva com ingredientes importados e decoração artesanal.', price: 'R$149', img: '/bolo-premium.jpg' },
    { name: 'Cupcakes', desc: 'Caixinha com 6 unidades — sabores variados com cobertura de buttercream.', price: 'R$52', img: '/cupcake.jpg' },
    { name: 'Donuts', desc: 'Caixa com 4 donuts artesanais com coberturas coloridas e recheios especiais.', price: 'R$38', img: '/donuts.jpg' },
  ]

  const faqs = [
    { q: 'Qual o prazo de entrega?', a: 'Realizamos entregas em até 2 horas para pedidos prontos. Encomendas personalizadas precisam de 48 a 72h de antecedência. Consulte a área de cobertura pelo WhatsApp.' },
    { q: 'Quais formas de pagamento vocês aceitam?', a: 'Aceitamos Pix, cartão de crédito (até 3x sem juros), débito e dinheiro. Pagamentos online pelo link enviado pelo WhatsApp.' },
    { q: 'Fazem bolos personalizados e encomendas?', a: 'Sim! Adoramos criar bolos especiais para aniversários, casamentos e eventos. Entre em contato com pelo menos 72h de antecedência para discutirmos os detalhes.' },
    { q: 'Os produtos têm opção sem glúten ou sem lactose?', a: 'Temos algumas opções adaptadas. Consulte nossa lista completa pelo WhatsApp e informe suas restrições alimentares ao fazer o pedido.' },
  ]

  return (
    <>
      {/* STICKY */}
      <a href="https://wa.me/5511999999999?text=Quero%20fazer%20um%20pedido!" className="sticky-cta" target="_blank" rel="noopener">
        🍰 Pedir Agora
      </a>

      {/* MOBILE MENU */}
      <div className={`mob-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobileOpen(false)}>✕ fechar</button>
        <a href="#hero"         onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#produtos"     onClick={() => setMobileOpen(false)}>Produtos</a>
        <a href="#processo"     onClick={() => setMobileOpen(false)}>Processo</a>
        <a href="#faq"          onClick={() => setMobileOpen(false)}>Contato</a>
      </div>

      {/* NAVBAR */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-main">Cake <span>Factory</span></span>
          <span className="nav-logo-sub">Sobremesas Artesanais</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#processo">Sobre</a></li>
          <li><a href="#faq">Contato</a></li>
          <li>
            <a href="https://wa.me/5511999999999?text=Quero%20fazer%20um%20pedido!" className="btn-nav-rose" target="_blank" rel="noopener">
              Pedir Agora
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-inner">
          <p className="hero-pre reveal">Feito com carinho todos os dias</p>

          <h1 className="hero-title reveal" style={{ transitionDelay: '.1s' }}>
            Bolos Incríveis<br />
            Que <em>Encantam</em>
          </h1>

          <p className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
            Sobremesas artesanais que tornam qualquer momento mais especial.
          </p>

          <div className="hero-btns reveal" style={{ transitionDelay: '.3s' }}>
            <a href="https://wa.me/5511999999999?text=Quero%20fazer%20um%20pedido!" className="btn-rose" target="_blank" rel="noopener">
              🍰 Pedir Agora
            </a>
            <a href="#produtos" className="btn-outline-rose">
              Ver Cardápio →
            </a>
          </div>
        </div>

        <div className="hero-proof">
          <div>
            <div className="proof-stars">★★★★★</div>
            <div className="proof-text">
              <strong>4.9 / 5.0</strong>
              +800 pedidos entregues
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUTOS ══ */}
      <section id="produtos">
        <div className="prod-inner">
          <div className="prod-header">
            <div className="sec-tag reveal">🎂 Nossos Produtos</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Feitos para <em>Encantar</em>
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.15s' }}>
              Cada sobremesa preparada com ingredientes selecionados e muito carinho
            </p>
          </div>

          {/* Top 3 cards */}
          <div className="prod-grid">
            {produtos.slice(0, 3).map((p, i) => (
              <div className="prod-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="prod-card-img">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="prod-card-body">
                  <div className="prod-card-name">{p.name}</div>
                  <p className="prod-card-desc">{p.desc}</p>
                  <div className="prod-card-footer">
                    <div className="prod-card-price">
                      <small>a partir de</small>
                      {p.price}
                    </div>
                    <a href="https://wa.me/5511999999999" className="btn-pedir" target="_blank" rel="noopener">
                      Pedir →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 2 cards — centered */}
          <div className="prod-grid-bottom">
            {produtos.slice(3).map((p, i) => (
              <div className="prod-card reveal" key={i} style={{ transitionDelay: `${(i + 3) * 0.1}s` }}>
                <div className="prod-card-img">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="prod-card-body">
                  <div className="prod-card-name">{p.name}</div>
                  <p className="prod-card-desc">{p.desc}</p>
                  <div className="prod-card-footer">
                    <div className="prod-card-price">
                      <small>a partir de</small>
                      {p.price}
                    </div>
                    <a href="https://wa.me/5511999999999" className="btn-pedir" target="_blank" rel="noopener">
                      Pedir →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESSO ══ */}
      <section id="processo">
        <div className="proc-inner">
          <div className="proc-img">
            <img src="/preparo.jpg" alt="Preparo artesanal" />
          </div>
          <div className="proc-content">
            <div className="sec-tag reveal">✨ Nosso Processo</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Feito com<br /><em>Atenção</em> aos Detalhes
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>
              Cada doce é preparado manualmente com atenção aos mínimos detalhes — do início ao acabamento final.
            </p>
            <div className="proc-steps reveal" style={{ transitionDelay: '.25s' }}>
              {[
                ['01', 'Seleção dos Ingredientes', 'Apenas insumos frescos e de alta qualidade entram na nossa cozinha.'],
                ['02', 'Preparo Artesanal', 'Tudo feito à mão, sem pressa, com receitas testadas e aperfeiçoadas.'],
                ['03', 'Acabamento Impecável', 'Decoração cuidadosa para que cada bolo seja único e especial.'],
              ].map(([num, title, desc]) => (
                <div className="proc-step" key={num}>
                  <div className="proc-step-num">{num}</div>
                  <div className="proc-step-text">
                    <strong>{title}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ INGREDIENTES ══ */}
      <section id="ingredientes">
        <div className="ingr-inner">
          <div className="ingr-content">
            <div className="sec-tag reveal">🌿 Qualidade</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Ingredientes<br /><em>Frescos</em> e Selecionados
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>
              Utilizamos apenas ingredientes frescos e selecionados. Sem conservantes, sem artificiais — apenas sabor verdadeiro em cada mordida.
            </p>
            <div className="ingr-tags reveal" style={{ transitionDelay: '.25s' }}>
              {['Ovos Caipiras', 'Farinha Especial', 'Chocolate Belga', 'Manteiga Premium', 'Frutas Frescas', 'Sem Conservantes'].map(tag => (
                <span className="ingr-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="ingr-img">
            <img src="/ingredientes.jpg" alt="Ingredientes frescos e selecionados" />
          </div>
        </div>
      </section>

      {/* ══ OFERTA ══ */}
      <section id="oferta">
        <div className="oferta-inner">
          <span className="oferta-badge reveal">🎁 Promoção Especial</span>
          <h2 className="oferta-title reveal" style={{ transitionDelay: '.1s' }}>
            Ganhe um cupcake <em>grátis</em><br />
            em pedidos acima de R$25
          </h2>
          <p className="oferta-sub reveal" style={{ transitionDelay: '.2s' }}>
            Válido todos os dias pelo WhatsApp • Enquanto durar o estoque
          </p>
          <a
            href="https://wa.me/5511999999999?text=Quero%20aproveitar%20a%20promo%20do%20cupcake%20gr%C3%A1tis!"
            className="btn-rose reveal"
            style={{ transitionDelay: '.3s', display: 'inline-flex' }}
            target="_blank" rel="noopener"
          >
            🍰 Pedir Agora
          </a>
        </div>
      </section>

      {/* ══ DEPOIMENTOS ══ */}
      <section id="depoimentos">
        <div className="deps-inner">
          <div className="deps-header">
            <div className="sec-tag reveal">💬 Clientes Felizes</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              O que dizem sobre <em>nós</em>
            </h2>
          </div>
          <div className="deps-grid">
            {[
              { name: 'Mariana S.', loc: 'São Paulo, SP', text: 'Os melhores bolos que já provei! O bolo de morango é simplesmente perfeito — a massa é incrivelmente fofinha.' },
              { name: 'Juliana R.', loc: 'Campinas, SP', text: 'Lindos e deliciosos! Encomendei para o aniversário da minha filha e todo mundo ficou apaixonado.' },
              { name: 'Fernanda M.', loc: 'São Paulo, SP', text: 'O bolo premium superou todas as expectativas. Presenteio e recomendo para todas as ocasiões especiais.' },
            ].map((dep, i) => (
              <div className="dep-card reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="dep-quote">&ldquo;</div>
                <div className="dep-stars">★★★★★</div>
                <p className="dep-text">{dep.text}</p>
                <div className="dep-sep" />
                <div className="dep-author">
                  <strong>{dep.name}</strong>
                  <span>{dep.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="sec-tag reveal">❓ Dúvidas</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              Perguntas <em>Frequentes</em>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-ic">+</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="ft-inner">
          <div>
            <a href="#hero" className="ft-logo-main">Cake <span>Factory</span></a>
            <span className="ft-logo-sub">Sobremesas Artesanais</span>
            <p className="ft-tag">Feitos com carinho todos os dias para tornar seus momentos mais doces e especiais.</p>
            <a href="https://wa.me/5511999999999" className="ft-link" target="_blank" rel="noopener"><span>💬</span> (11) 99999-9999</a>
            <a href="https://instagram.com/cakefactory" className="ft-link" target="_blank" rel="noopener"><span>📸</span> @cakefactory</a>
            <a href="#" className="ft-link"><span>📍</span> Rua das Flores, 123 — São Paulo</a>
          </div>
          <div>
            <div className="ft-col-title">Navegação</div>
            <ul className="ft-links">
              {[['#hero','Home'],['#produtos','Produtos'],['#processo','Nosso Processo'],['#ingredientes','Ingredientes'],['#faq','Contato']].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-col-title">Horários</div>
            <ul className="ft-links">
              <li><a href="#">Seg–Sex: 8h–20h</a></li>
              <li><a href="#">Sáb–Dom: 8h–18h</a></li>
              <li><a href="#">Encomendas: 72h antes</a></li>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener">Fazer Pedido →</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span className="ft-copy">© 2025 Cake Factory. Todos os direitos reservados.</span>
          <span className="ft-heart">🍰 feito com amor</span>
        </div>
      </footer>
    </>
  )
}
