import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Package, XCircle } from "lucide-react";
import { useBulkUploadProductStore } from "../../store/index.store";
import { Button } from "@/components/ui/button";
function parseError(errorString: string) {
  try {
    const parsed = JSON.parse(errorString);
    return parsed.error?.message || "Unknown error";
  } catch {
    return errorString;
  }
}
export default function UploadedStats() {
  const {
    processed,
    successCount,
    failedCount,
    successList,
    reset,
    failedList,
    percentage,
  } = useBulkUploadProductStore((state) => state);

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h4 className="text-3xl font-bold">Bulk Uploaded Results</h4>
        <Button onClick={reset}>Next Upload</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {successCount}
            </div>
            <p className="text-xs text-muted-foreground">{((successCount / processed) * 100).toFixed(0)}% success rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{failedCount}</div>
            <p className="text-xs text-muted-foreground">
              {((failedCount / processed) * 100).toFixed(0)}% failure rate
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Progress (<span>{processed}</span>)
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h5 className="font-bold text-primary">Total Progress </h5>
              <div className="flex items-center gap-4">
                <Progress value={percentage} />
                <Label>{percentage === 100 ? "Done!" : `${percentage}%`}</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {failedCount > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-red-600" />
            <h2 className="text-xl font-semibold text-foreground">
              Failed Products
            </h2>
            <Badge variant="destructive">{failedCount}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {failedList.map((product, i) => (
              <Card key={i} className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {product.data.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {product.data.description}
                      </CardDescription>
                    </div>
                    <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium">
                      {product.data.price} MMK
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline">{product.data.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Inventory:</span>
                    <span className="font-medium">
                      {product.data.inventory}
                    </span>
                  </div>
                  <Alert variant="destructive" className="mt-3">
                    <AlertDescription className="text-xs">
                      <strong>Error on Row - {product.row}:</strong> {parseError(product.error || "")}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      {failedCount === 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-red-600" />
            <h2 className="text-xl font-semibold text-foreground">
              Failed Products
            </h2>
            <Badge variant="secondary">{failedCount}</Badge>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  All products were successfully uploaded in this batch.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {successCount > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold text-foreground">
              Successed Products
            </h2>
            <Badge>{successCount}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {successList.map((product, i) => (
              <Card key={i} className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {product.data.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {product.data.description}
                      </CardDescription>
                    </div>
                    <XCircle className="h-5 w-5 text-green-600 flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium">
                      {product.data.price} MMK
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline">{product.data.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Inventory:</span>
                    <span className="font-medium">
                      {product.data.inventory}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {successCount === 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold text-foreground">
              Successful Products
            </h2>
            <Badge>{successCount}</Badge>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No products were successfully uploaded in this batch.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
