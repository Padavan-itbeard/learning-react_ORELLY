export const SiteLayout = ({
    children,
    menu = c => null,
}) => {
    return (
        <div className="SiteContainer">
            <div>{menu}</div>
            <div>{children}</div>
        </div>
    );
}