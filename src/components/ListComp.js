import axios from "axios";
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function ListComp() {
    
    
    return (
        <div className="List">
          <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome do Livro</Table.HeaderCell>
                        <Table.HeaderCell>Autor</Table.HeaderCell>
                        <Table.HeaderCell>Categoria</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Morro dos Ventos Uivantes</Table.Cell>
                        <Table.Cell>Vitoria</Table.Cell>
                        <Table.Cell>Romance</Table.Cell>
                        
                    </Table.Row>
                </Table.Body>
            </Table>
            
        </div>
    );
}
export default ListComp;