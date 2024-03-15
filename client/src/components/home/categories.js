import { Button, Table, TableHead, TableBody, TableCell, TableRow, styled } from "@mui/material";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const StyledTable=styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1) ;
`;


const Categories=()=>{
    return (
        <>
            <Link to='/create'>
                <button className="btn btn-primary" style={{margin: "1rem", width: "100%"}}>Create Blog</button>
            </Link>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category=>(
                            <TableRow key={category.id}>
                                <TableCell>
                                    {category.type}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;