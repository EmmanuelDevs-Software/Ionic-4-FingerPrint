import { TestBed } from "@angular/core/testing";
import { StorageService } from "./local-storage.service";
import {
  DBConfig,
  NgxIndexedDBModule,
  NgxIndexedDBService
} from "ngx-indexed-db";

describe("StorageService", () => {
  let storageService: StorageService;
  const configMock: DBConfig = {
    name: "ARGOSTORAGE",
    version: 1,
    objectStoresMeta: [
      {
        store: "SEGURCAIXA",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "nombre", keypath: "nombre", options: { unique: false } },
          { name: "apellido", keypath: "apellido", options: { unique: false } },
          { name: "telefono", keypath: "telefono", options: { unique: false } },
          { name: "modified", keypath: "modified", options: { unique: false } }
        ]
      }
    ]
  };

  let userMock = {
    dbName: "@addd",
    data: "emmanuel"
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxIndexedDBModule.forRoot(configMock)],
      providers: [StorageService]
    });
    storageService = TestBed.get(StorageService);
  });

  it("should be created", () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it("should add", () => {
    const service: StorageService = TestBed.get(StorageService);
    service.addItem(userMock.dbName, userMock.data).then(datos => {
      service.addItem(userMock.dbName, userMock.data);
    expect(service.addItem(userMock.dbName, userMock.data)).toEqual(userMock.dbName, userMock.data);
    });
  });
});
