import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    color: "Salmon"
};

const Header = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/pets">
                <a style={linkStyle}>Pets</a>
            </Link>
        </div>
    );
}

export default Header;