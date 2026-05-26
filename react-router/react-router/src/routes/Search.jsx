import { useSearchParams, Link,} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {

    const [SearchParams] = useSearchParams();
    const query = SearchParams.get("q") || "";


    //Busca apenas pelo campo 'name'
    const url = "http://localhost:3000/products?name_like=" + query;

    const {data: items, loading, error } = useFetch(url);

  return (
    <div>
        <h1>Resultados disnponíveis</h1>
        <ul className="products"></ul>
            {items &&
            items.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.pricef}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>

                </li>
            ))
            }
    </div>
  )
}

export default Search;