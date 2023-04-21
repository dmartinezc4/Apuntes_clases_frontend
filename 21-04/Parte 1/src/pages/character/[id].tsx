import { gql } from "@apollo/client";
import getApolloClient from "@/libs/client"
import { GetServerSideProps, NextPage } from "next";


export const getServerSideProps:GetServerSideProps = async(context) =>{

    const { id }= context.query;

    const query= gql`
        query character($id:ID!){ 
         character(id:$id) {
          name
         }
    }
    `
    const client= getApolloClient();
    const {data}= await client.query<{
        character:{
            name:string
        }
    }>({
        query,
        variables:{
            id
        }
    });

    return {
        props: {
            name: data.character.name
        }
    }
    
}

const Page:NextPage<{name:string}> = (props:{name:string}) =>{
    return(
    <>
        {props.name}
    </>
    )
}
export default Page;