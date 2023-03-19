import '../Styles/Search.css'

export default function Search(){
    return(
        <div className="searchBox">
            <input className="search" type="text" placeholder="Busca en la red sin que te rastreen" />
            <button className="searchButton"><i class="fa-regular fa-magnifying-glass"></i></button>
        </div>
    )
}