import PageTransitionHandler from "@/components/page_transition_handler";
import FirstLoadContextProvider from "@/contexts/first_load_context";
import OverlayTitleContextProvider from "@/contexts/overlay_title_context";
import TransitionContextProvider from "@/contexts/transition_context";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return <FirstLoadContextProvider>
          <OverlayTitleContextProvider>
            <TransitionContextProvider>
                <PageTransitionHandler>
                  <Component key = {router.route} {...pageProps} />
                </PageTransitionHandler>
            </TransitionContextProvider>
          </OverlayTitleContextProvider>
        </FirstLoadContextProvider>
}
