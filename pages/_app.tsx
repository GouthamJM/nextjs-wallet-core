import { AppProps } from "next/app";
import trustWalletService from "../utils/walletCore";
import dynamic from "next/dynamic";
import { FC } from "react";


 function PageLayoutHoc<T>(HocComponent: FC<T>) {
  function PageLayoutHoc(props: any) {
      return (
        <div className="pageWrapper">
        <main>
            <HocComponent {...props} />
        </main>
         </div>
      );
  }
  return PageLayoutHoc;
}


const Layout: FC<AppProps> = ({ Component, pageProps }) =>{
    return <Component {...pageProps} />;
}

 const PageLayoutWithTrustWalletService = dynamic(
    async () => {
        await trustWalletService.init();
        return PageLayoutHoc(Layout);
    },
    { ssr: false },
);



export default PageLayoutWithTrustWalletService;