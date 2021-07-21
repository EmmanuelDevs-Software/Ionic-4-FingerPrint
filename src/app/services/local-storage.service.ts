import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { Platform } from "@ionic/angular";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(
    public platform: Platform,
    private dbService: NgxIndexedDBService
  ) //  public storage: Storage,
  {}

  /**
   * Initialize all service Storage
   * @param AddItem
   * @param Update
   * @param GetAll
   * @param GetIndex
   * @param Delete
   * @param Count
   * @param ClearDb
   */

  /**
   * @param AddItem
   */
  public addItem(dbName: string, item: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService.add(dbName, item)
      .then(res=> resolve(res))
      .catch(err=> console.error("Se ha producido un error en Add: ", err)
      )
    });
  }

  /**
   * @param Update
   */
  public update(dbName: string, id: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .update(dbName, id)
        .then(res => resolve(res))
        .catch(err =>
          console.error("Se ha producido un error en Update: ", err)
        );
    });
  }
  /**
   * @param driverUsed
   */
  // public driverUsed(): Promise<any> {
  //   return new Promise<any>(resolve => {
  //     resolve(this.storage.driver);
  //   });
  // }
  /**
   * @param getAll
   */
  public getAll(dbName: string): Observable<any> {
    return new Observable<any>(observer => {
      observer.next(this.dbService.getAll(dbName));
    });
  }
  /**
   * @param getIndexID
   */
  public getIndexID(dbName: string, key: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getByID(dbName, key)
        .then(res => resolve(res))
        .catch(err =>
          console.error("Se ha producido un error en getIndexKey: ", err)
        );
    });
  }


   /**
   * @param getIndexIndex
   */
  public getIndex(dbName: string, key: any, value:any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getByIndex(dbName, key, value)
        .then(res => resolve(res))
        .catch(err =>
          console.error("Se ha producido un error en getIndex: ", err)
        );
    });
  }
  /**
   * @param delete
   */
  public delete(dbName: string, id): Promise<any> {
      return new Promise<any>(resolve => {
        this.dbService
          .delete(dbName, id)
          .then(res => resolve(res))
          .catch(err =>
            console.error("Se ha producido un error en Delete: ", err)
          );
      });
  }
  /**
   * @param count
   */
  public count(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
     this.dbService.count(dbName)
     .then(res=> resolve(res))
     .catch(err=> console.error("Se ha producido un error en Count", err))
    });
  }
  /**
   * @param clearDb
   */
  public clearDB(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
        this.dbService.clear(dbName)
        .then(res=> resolve(res))
        .catch(err=> console.error("Se ha producido un error en clear", err))
    });
  }
  /**
   * @param deleteHybrid
   */
  private deleteHybrid(): Promise<any> {
    return new Promise<any>(resolve => {
        this.dbService.deleteDatabase()
        .then(res=> resolve(res))
        .catch(err=> console.error('Se ha producido un error en Delete', err));
    });
  }
}
