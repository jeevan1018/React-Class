import potatos from "./potato.jpeg";
import tomato from "./tomato.jpeg";
import onion from "./onion.jpeg";
import chilly from "./chilly.jpeg";
import coriander from "./coriander.jpeg";
import logo from "./logo.jpeg";
import "./Table.css"

export function TableComponent(){
    return(
        <div className="container">
            <h1 style={{marginLeft:"130px",color:"green"}}> Heritage Vegetable Chart</h1>
<table>
    <tr>
        <th>
            Sno.

        </th>
        <th>
            Name
        </th>
        <th>
            Image
            
        </th>
        <th>
            Cost Price(per/kg)
            
        </th>
        <th>
            Markeup Retailed Price(per/kg)
        </th>
        <th>
            Selling Price(per/kg)
        </th>
    </tr>
    <tr>
        <td>
1
        </td>
        <td>
            Potato
            </td>
            <td>
                <img src={potatos} alt={"potato"} height={"100px"} width={"100px"}/>
            
            </td>
            <td>

                80/-

            
            </td>
            <td>

                100/-


            </td>
            <td>

                90/-
                

                </td>
    </tr>
    <tr>
        <td>
            2

        </td>
        <td>
            Tomato
            
            </td>
            <td>
            <img src={tomato} height={"100px"} width={"100px"} />
            </td>
            <td>
                60/-
            
            </td>
            <td>

                80/-
                
            </td>
            <td>
                70/-
            </td>
    </tr>
    <tr>
        <td>
            3
        </td>
        
        <td>
            Onion

        </td>
        <td>
            <img src={onion} height={"100px"} width={"100px"}/>
            </td>
            <td>

                100/-
            
            </td>
            <td>
                120/-
            
            </td>
            <td>

                105/-
                
            </td>
    </tr>
    <tr>
        <td>
4
        </td>
        <td>
            Chilly
            </td>
            <td>
            <img src={chilly} height={"100px"} width={"100px"}/>
            </td>
            <td>
            20/-
            </td>
            <td>
                50/-
                
            </td>
            <td>
                35/-
            </td>
    </tr>
    
    <tr>
        <td>
5
        </td>
        <td>
            Coriander
            </td>
            <td>
            <img src={coriander} height={"100px"} width={"100px"}/>
            </td>
            <td>
            10/-
            </td>
            <td>
                25/-
                
            </td>
            <td>
                15/-
            </td>
    </tr>
</table>



        </div>
    )
}