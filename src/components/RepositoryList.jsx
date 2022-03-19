import {useState , useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const API_URL = 'https://api.github.com/users/cristianolimaribeiro/repos'
export function Repositorylist(){

    const [repositories, setRepositories] = useState([]); 

    useEffect(() => {
        fetch(`${API_URL}`)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}