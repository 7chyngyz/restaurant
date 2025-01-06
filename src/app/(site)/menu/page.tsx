import Menu from "@/components/pages/MenuSection/Menu";
import { Suspense } from "react";



const Page = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Menu />
        </Suspense>
    );
};

export default Page;
