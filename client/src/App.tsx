import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import UeberUns from "@/pages/UeberUns";
import Expertise from "@/pages/Expertise";
import InfosEvents from "@/pages/InfosEvents";
import BauwerksdiagnostikerFinden from "@/pages/BauwerksdiagnostikerFinden";
import Mitgliedschaft from "@/pages/Mitgliedschaft";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutzerklaerung from "@/pages/Datenschutzerklaerung";
import Vorstandswahl2023 from "@/pages/Vorstandswahl2023";
import DocsHub from "@/pages/DocsHub";
import DocPage from "@/pages/DocPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/ueber-uns"} component={UeberUns} />
      <Route path={"/expertise"} component={Expertise} />
      <Route path={"/infos-events"} component={InfosEvents} />
      <Route path={"/bauwerksdiagnostiker-finden"} component={BauwerksdiagnostikerFinden} />
      <Route path={"/mitgliedschaft"} component={Mitgliedschaft} />
      <Route path={"/kontakt"} component={Kontakt} />
      <Route path={"/impressum"} component={Impressum} />
      <Route path={"/datenschutzerklaerung"} component={Datenschutzerklaerung} />
      <Route path={"/vorstandswahl-2023"} component={Vorstandswahl2023} />
      <Route path={"/docs/:slug"} component={DocPage} />
      <Route path={"/docs"} component={DocsHub} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
