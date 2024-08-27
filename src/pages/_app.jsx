import PageTransitionHandler from "@/components/page_transition_handler";
import TransitionContextProvider from "@/contexts/transition_context";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return <TransitionContextProvider>
            <PageTransitionHandler>
              <Component key = {router.route} {...pageProps} />
            </PageTransitionHandler>
        </TransitionContextProvider>
}
