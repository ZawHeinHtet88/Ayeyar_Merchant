export interface BulkResponse {
  type: string;
  sessionId: string;
  processed: number;
  success: number;
  failed: number;
  current: {
    row: number;
    data: {
      name: string;
      description: string;
      body: string;
      price: string
      discount: string;
      inventory: string;
      category: string;
      type: string;
      images:string;
      tags:string;
    };
    status: string;
    error: string
  };
  progress : number
}
