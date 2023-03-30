import React from "react";
import Link from 'next/link'
import Head from "next/head"
import { Button } from "antd";
import Header from "@/components/header/header";
import MainContent from "@/components/mainContent/mainContent";
import BottomContent from "@/components/bottomContent/bottomContent";

export default function Home() {
    return (<div>
        <Header />
        <MainContent>
        </MainContent>
        <BottomContent></BottomContent>
    </div>)
}
