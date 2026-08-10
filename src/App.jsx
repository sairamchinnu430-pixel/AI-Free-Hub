import { useState } from "react";
import { Search } from "lucide-react";
import { tools } from "./data/tools";

function App() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    `${tool.name} ${tool.description} ${tool.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span>AI</span> Free Hub
        </div>

        <nav>
          <a href="#tools">AI Tools</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="badge">🚀 Discover Free AI Tools</p>

          <h1>
            Find the best <span>AI tools</span>
            <br />
            in one place.
          </h1>

          <p className="hero-text">
            Explore useful AI tools for writing, images, video, coding,
            productivity and more.
          </p>

          <div className="search-box">
            <Search size={22} />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        <section id="tools" className="tools-section">
          <div className="section-heading">
            <h2>AI Tools</h2>
            <p>{filteredTools.length} tools found</p>
          </div>

          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <article className="tool-card" key={tool.id}>
                <div className="tool-icon">{tool.icon}</div>

                <div className="tool-content">
                  <h3>{tool.name}</h3>
                  <span className="category">{tool.category}</span>
                  <p>{tool.description}</p>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Tool →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="empty">
              <h3>No tools found</h3>
              <p>Try searching for another AI tool.</p>
            </div>
          )}
        </section>

        <section id="about" className="about">
          <h2>About AI Free Hub</h2>
          <p>
            AI Free Hub is a directory designed to help people discover
            useful AI tools and free AI resources in one simple place.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 AI Free Hub. Built with ❤️ and AI.</p>
      </footer>
    </div>
  );
}

export default App;
