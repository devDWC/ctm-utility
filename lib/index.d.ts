// ctm-library/index.d.ts
export const s3Utility: {
  s3Init: (config: {
    endpoint: string;
    region?: string;
    accessKeyId: string;
    secretAccessKey: string;
  }) => any;
  uploadSingleFileAsync: (
    files: any[],
    folderPath: string,
    organization: string,
    aspectRatio?:string
  ) => Promise<any>;
  uploadMultipleFilesAsync: (
    files: any[],
    folderPath: string,
    organization: string,
    aspectRatio?:string
  ) => Promise<any>;

  uploadFilesJoinInFolderAsync: (
    files: any[],
    folderPath: string,
    organization: string,
    aspectRatio?:string
  ) => Promise<any>;

  deleteFolderAsync: (
    folderPath: string,
    organization: string
  ) => Promise<any>;
};
// ctm-library/index.d.ts
export const mgoUtility: {
  buildMongoQuery: (params: {
    search?: string;
    searchKeys?: string[];
    sortList?: { [key: string]: 1 | -1 }[];
    defaultSort?: { [key: string]: 1 | -1 };
    baseFilter?: Record<string, any>;
  }) => {
    filter: Record<string, any>;
    sort: Record<string, 1 | -1>;
  };
};

