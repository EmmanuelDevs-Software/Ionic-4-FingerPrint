import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'secure-storage', loadChildren: './secure-storage/secure-storage.module#SecureStoragePageModule' },  { path: 'storage-dos', loadChildren: './storage-dos/storage-dos.module#StorageDosPageModule' },
  { path: 'ngx-indexeddb', loadChildren: './ngx-indexeddb/ngx-indexeddb.module#NgxIndexeddbPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
