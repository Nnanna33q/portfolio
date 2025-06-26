import { animateBars, reverseAnimateBars } from "../data/animations";

export default function Bars({ isMobileNavbar, setIsMobileNavbar }) {

    function ToggleMobileNavbar() {
        if(isMobileNavbar) {
            reverseAnimateBars('.bar-1', '.bar-2', '.bar-3');
            setIsMobileNavbar(false);
            document.body.classList.remove('!overflow-y-hidden');
        } else {
            animateBars('.bar-1', '.bar-2', '.bar-3');
            setIsMobileNavbar(true)
            document.body.classList.add('!overflow-y-hidden');
        }
    }

    return (
        <div className="flex flex-col gap-y-1" onClick={ToggleMobileNavbar}>
            <div className="bar-1 w-6 h-0.75 bg-secondary dark:bg-primary rounded-md"></div>
            <div className="bar-2 w-6 h-0.75 bg-secondary dark:bg-primary rounded-md opacity-0"></div>
            <div className="bar-3 w-6 h-0.75 bg-secondary dark:bg-primary rounded-md"></div>
        </div>
    )
}