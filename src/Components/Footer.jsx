import logo from '../Assets/img/Logo_MovieFlix_cortada.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="bg-zinc-900 text-zinc-400 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between">
                <div>
                    <img 
                        src={logo} 
                        alt="Logo MovieFlix" 
                        width="50px" 
                        height="50px" 
                    />
                    <h2 className="text-white text-lg font-semibold">MovieFlix</h2>
                    <p className="text-sm">
                        Plataforma de filmes desenvolvida com React e TMDB API.
                    </p>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <span onClick={() => navigate("/home")}>Home</span>
                    <a href="#Minhalista">Favoritos</a>
                    <span onClick={() => navigate("/search")}>Pesquisa</span>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <span onClick={() => navigate("/categories/28/Ação")}>Ação</span>
                    <span onClick={() => navigate("/categories/10749/Romance")}>Romance</span>
                    <span onClick={() => navigate("/categories/18/Drama")}>Drama</span>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <span onClick={() => navigate("/categories/9648/Mistério")}>Mistério</span>
                    <span onClick={() => navigate("/categories/99/Documentário")}>Documentários</span>
                    <span onClick={() => navigate("/categories/14/Fantasia")}>Fantasia</span>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <a
                        href='https://github.com/GeovannaCassia'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href='https://www.linkedin.com/in/geovanna-cassia/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </a>

                    <a
                        href='https://developer.themoviedb.org/docs/getting-started'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        API TMDB
                    </a>
                </div>
            </div>

            <div className="text-center text-xs mt-6 border-t border-zinc-700 pt-4">
                © 2026 MovieFlix — Desenvolvido por Geovanna Cássia
                <br />
                This product uses the TMDB API but is not endorsed or certified by TMDB.
            </div>
        </footer>
    )
}

export default Footer;