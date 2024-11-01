import { TabBar } from "@/components";
import { cookies } from 'next/headers'

export const metadata = {
    title: 'Cookies page',
    description: 'Cookies page',
};

export default function CookiesPage() {

    const cookieStore = cookies()
    const cookieTab = cookieStore.get('selectedTab')?.value ?? '1';
    
    

    return (
        <div className="grid drid-cols-1 sm:grid-cols-2 gap-3">

            <div>
                <span className="text-3xl ">Tabs</span>
                <TabBar currentTab={+cookieTab}/>
            </div>

        </div>
    );
}
