import { gql } from "@apollo/client";
import getApolloClient from "@/libs/client"
import { GetServerSideProps, NextPage } from "next";
import Character from "@/components/character";


export const getServerSideProps:GetServerSideProps = async(context) =>{

    const { id } = context.query;

    return {
        props: {
            id
        }
    }
    
}

const Page:NextPage<{id:string}> = ({id}) =>{
    return(
    <>
        <Character id={id}></Character>
    </>
    )
}
export default Page;