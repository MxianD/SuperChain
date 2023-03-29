import React from "react";
import Link from 'next/link'
import Head from "next/head"
import { Button } from "antd";
import Header from "@/components/header/header";
import MainContent_System from "@/components/system/mainContent_system/mainContent_system";

export default function Home() {
    return (<div>
        <Header />
        <MainContent_System>
        </MainContent_System>
    </div>)
}
