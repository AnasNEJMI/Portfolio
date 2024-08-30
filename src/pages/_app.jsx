import PageTransitionHandler from "@/components/page_transition_handler";
import FirstLoadProvider from "@/contexts/first_load_context";
import OverlayTitleProvider from "@/contexts/overlay_title_context";
import PageTransitionProvider from "@/contexts/transition_context";
import VerticalNavStateProvider from "@/contexts/vertical_nav_state_context";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return <FirstLoadProvider>
          <OverlayTitleProvider>
            <PageTransitionProvider>
                <VerticalNavStateProvider>
                  <PageTransitionHandler>
                    <Component key = {router.route} {...pageProps} />
                  </PageTransitionHandler>
                </VerticalNavStateProvider>
            </PageTransitionProvider>
          </OverlayTitleProvider>
        </FirstLoadProvider>
}
