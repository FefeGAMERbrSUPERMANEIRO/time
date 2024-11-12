import { Link } from 'react-router-dom';
import '../css/style.css';
import Logo from '../img/imgprofessor.png'

function Header(){
    return(
        <header>
            <div>

                <img src={Logo} alt='Logo' title='logo professorAluno' />
            </div>
            <nav>
                <a href='/' className='abas'>Home</a>
                <span className='separador'>|</span>
                
                <a href='/crudProduto' className='abas'>Produto</a>
                <span className='separador'>|</span>

                <a href='/crudCategoria' className='abas'>Categoria</a>
                <span className='separador'>|</span>
                
                <a href='/login' className='abas'>Login</a>
            </nav>

            </header>

            
    )
}
export default Header;