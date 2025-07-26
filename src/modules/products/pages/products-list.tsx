
import BreadCrumps from '@/components/ui/breadcrumbs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DataTable from '@/components/ui/data-table'
import { useGetAllProductQuery } from '../hooks/queries'
import { useState } from 'react'
import { columns } from '../components/ui/columns'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { PlusCircle } from 'lucide-react'

export default function ProductListPage() {


    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const { data,isLoading } = useGetAllProductQuery({
        page: pagination.pageIndex + 1,
        limit: pagination.pageSize
    })

    if(isLoading) return "loading"

    return (
        <section className="flex flex-col gap-4">
            <BreadCrumps
                breadcrumbs={[{ label: "Products", href: "/dashboard/products" }]}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex w-full items-center justify-between">
                        <h1>Products</h1>
                        <Button variant={"default"} asChild>
                            <Link to="/dashboard/products/create">
                                <PlusCircle /> Create Product
                            </Link>
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <DataTable
                            columns={columns(data?.pagination)}
                            data={data?.data}
                            pagination={pagination}
                            setPagination={setPagination}
                            totalResult={data?.pagination?.totalResult || 0}
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
