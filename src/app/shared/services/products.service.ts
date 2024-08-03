import { Injectable } from '@angular/core';
import { IProducts } from '../models/products.interface';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';
import { DialogeService } from './dialoge.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _snackbar : SnackbarService,
    private _router : Router,
    private _dialog : DialogeService
  ) { }

  productsArr :Array<IProducts>  = [
    {
        pname: "Apple iPhone 12 Pro",
        pId: "1001",
        pStatus: "Dispatched",
        canReturn: 1,
        productDescription: "The Apple iPhone 12 Pro features a Super Retina XDR display with Ceramic Shield, A14 Bionic chip with next-generation Neural Engine, and a triple-camera system with Ultra Wide, Wide, and Telephoto lenses. It supports Night mode, Deep Fusion, and Dolby Vision HDR recording up to 60fps. The iPhone 12 Pro runs on iOS 15, offering Face ID for secure authentication, MagSafe technology for easy attachment of accessories, and 5G connectivity for fast download speeds.",
        productImg: "https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-pro/lifestyle/-1024w2/gsmarena_018.jpg"
    },
    {
        pname: "Samsung Galaxy S21 Ultra",
        pId: "1002",
        pStatus: "Delivered",
        canReturn: 0,
        productDescription: "The Samsung Galaxy S21 Ultra features a 108MP quad camera with 100x Space Zoom, 12MP ultra-wide, and two 10MP telephoto lenses. It sports a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate for smooth scrolling and gameplay. Powered by the Exynos 2100/Snapdragon 888 chipset, it runs on Android 12 with Samsung One UI 4.1. The Galaxy S21 Ultra supports 5G connectivity, has a 5000mAh battery, and offers up to 12GB RAM and 512GB storage.",
        productImg: "https://www.cnet.com/a/img/resize/3e495e5ec2d57f5893947cb6497fd9f4cf236c4e/hub/2021/01/20/5ac18449-617c-49ba-83f2-2971cb51078c/215-samsung-galaxy-s21-ultra-back.jpg?auto=webp&fit=crop&height=1200&width=1200"
    },
    {
        pname: "Sony PlayStation 5",
        pId: "1003",
        pStatus: "In-progress",
        canReturn: 1,
        productDescription: "The Sony PlayStation 5 (PS5) delivers stunning graphics with a custom RDNA 2 GPU and 16GB GDDR6 RAM. It features a lightning-fast SSD with 825GB storage, supporting fast loading times and immersive gaming experiences. The PS5 supports 4K gaming at up to 120fps, ray tracing, and 3D audio with the new DualSense wireless controller for haptic feedback and adaptive triggers. It also supports streaming services like Netflix, Disney+, and Spotify.",
        productImg: "https://s.yimg.com/os/creatr-uploaded-images/2020-11/7c9dc7a0-24f3-11eb-aed4-9f1ba3e2dec3"
    },
    {
        pname: "Nike Air Zoom Pegasus 38",
        pId: "1004",
        pStatus: "Dispatched",
        canReturn: 1,
        productDescription: "The Nike Air Zoom Pegasus 38 is designed for runners seeking responsive cushioning and a reliable fit. It features Zoom Air units in the forefoot and heel for a responsive feel, offering optimal energy return with every stride. The shoe's mesh upper provides breathable comfort, while Flywire technology integrates with the laces for a secure fit. The Nike Air Zoom Pegasus 38 is suitable for daily training and long-distance running.",
        productImg: "https://lh3.googleusercontent.com/YZaUfqPDVlNnu2lEvvF2jXe_izPNOhn1242c3vymYm2V0u3taJuftr7o-NZ8N2jeNyh6kWtsemHabTkpOvLxQHfzq6P0kbllQ7SNpriGAL5cpF-Enm-p4jKDc3Wud91mA0JUQsO7"
    },
    {
        pname: "Bose QuietComfort 45 Headphones",
        pId: "1005",
        pStatus: "Delivered",
        canReturn: 0,
        productDescription: "The Bose QuietComfort 45 Headphones feature Acoustic Noise Cancelling technology to block out ambient noise and provide clear audio. They offer a comfortable around-ear fit with plush ear cushions, ideal for extended listening sessions. The headphones include an intuitive control interface on the earcup for adjusting volume, managing calls, and activating voice assistants. They provide up to 24 hours of wireless playback and include a carrying case for portability.",
        productImg: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_Ecom-Gallery-W05.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
    },
    {
        pname: "Canon EOS R5 Mirrorless Camera",
        pId: "1006",
        pStatus: "Dispatched",
        canReturn: 1,
        productDescription: "The Canon EOS R5 Mirrorless Camera features a 45MP full-frame CMOS sensor and DIGIC X image processor for high-resolution imaging. It offers 8K RAW video recording at 30fps and 4K recording at up to 120fps with Canon Log. The camera includes Dual Pixel CMOS AF II for fast and accurate autofocus across the frame, suitable for both stills and video. It supports Dual Card Slots (CFexpress and SD UHS-II), has built-in Wi-Fi and Bluetooth, and features a vari-angle touchscreen LCD.",
        productImg: "https://expertphotography.com/wp-content/uploads/2021/01/73A9908.jpg"
    },
    {
        pname: "Samsung 55-inch QLED 4K Smart TV",
        pId: "1007",
        pStatus: "In-progress",
        canReturn: 1,
        productDescription: "The Samsung 55-inch QLED 4K Smart TV delivers vibrant colors and deep blacks with Quantum Dot technology and Direct Full Array backlighting. It features a 4K UHD resolution with HDR10+ support for enhanced contrast and detail in HDR content. The TV includes Ambient Mode+ to blend into your living space when not in use, and Object Tracking Sound (OTS) for a more immersive audio experience. It runs on Samsung's Tizen OS, offering access to a wide range of streaming apps and services.",
        productImg: "https://s7d5.scene7.com/is/image/FalabellaCO/sku_14913442_01?$fullchile$"
    },
    {
        pname: "Nintendo Switch OLED Model",
        pId: "1008",
        pStatus: "Delivered",
        canReturn: 0,
        productDescription: "The Nintendo Switch OLED Model features a vibrant 7-inch OLED screen with a 720p resolution in handheld mode. It provides enhanced audio for handheld and tabletop play and comes with 64GB internal storage for downloadable games. The console supports all Nintendo Switch games that work in handheld mode and includes features like a built-in stand, a dock with LAN port for wired internet connection, and compatibility with Joy-Con controllers.",
        productImg: "https://www.nme.com/wp-content/uploads/2021/07/Nintendo-Switch-OLED-model-2.jpg"
    },
    {
        pname: "KitchenAid Stand Mixer",
        pId: "1009",
        pStatus: "In-progress",
        canReturn: 1,
        productDescription: "The KitchenAid Stand Mixer is a versatile kitchen appliance with a powerful motor and multiple attachments. It includes a stainless steel mixing bowl, wire whip, dough hook, and flat beater for various mixing tasks. The mixer features a tilt-head design for easy access to the bowl and controls, making it ideal for preparing dough, batter, and other culinary creations. It combines functionality with a timeless design, available in multiple colors to complement any kitchen decor.",
        productImg: "https://images-na.ssl-images-amazon.com/images/G/15/aplusautomation/vendorimages/26c16f58-0ac8-4de7-8dc1-198ad07b980c.jpg._CB280388331_.jpg"
    },
    {
        pname: "Dyson V11 Absolute Cordless Vacuum",
        pId: "1010",
        pStatus: "Dispatched",
        canReturn: 1,
        productDescription: "The Dyson V11 Absolute Cordless Vacuum offers powerful suction with Dyson's digital motor V11, delivering fade-free performance for up to 60 minutes. It features advanced whole-machine filtration to capture 99.97% of particles as small as 0.3 microns. The vacuum includes three cleaning modes (Auto, Eco, Boost) to optimize cleaning performance based on floor type and debris. It comes with various attachments for versatile cleaning, including a High Torque cleaner head for deep cleaning carpets and a Mini Motorized tool for upholstery.",
        productImg: "https://assets.mydeal.com.au/47684/dyson-v11-absolute-cordless-vacuum-8335038_02.jpg?v=637974702698868628&imgclass=dealpageimage"
    }
];

fetchProducts(){
  return this.productsArr
}

getProductDetails(id : string):IProducts{
  return this.productsArr.find(prod => prod.pId===id)as IProducts
}

addProduct(prodObj:IProducts){
  this.productsArr.push(prodObj);
  this._snackbar.openSnackbar(`product ${prodObj.pname} is Added Successfully !! 👍`);
  this._router.navigate(['/products'])
}

updateProd(updatedObj : IProducts){
  let getUpdateId =this.productsArr.findIndex(prod=>prod.pId===updatedObj.pId);
  this.productsArr[getUpdateId]=updatedObj;
  this._snackbar.openSnackbar(`products ${updatedObj.pname} is updated successfully !! 👍 `);
  this._router.navigate(['/products'])
}

removeProduct(removeId:string){

let prodName = this.productsArr.find(prod=>prod.pId===removeId)?.pname
this._dialog.openDialog('Confirmation', `Are You sure ? You want to remove ${prodName} product?`)
.subscribe(res=>{
  if(res){
    let removeIndex = this.productsArr.findIndex((prod:IProducts)=>prod.pId===removeId);
    this.productsArr.splice(removeIndex,1);
    this._snackbar.openSnackbar(`Product ${prodName} is removed successfully !! 👍`);
    this._router.navigate(['/products'])
  }
})
}
}

