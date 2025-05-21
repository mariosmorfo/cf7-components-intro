const Footer = () => {
    const currentYear = new Date().getFullYear()
    return(
        <>
            <footer className="bg-gray-700">
                <div className="text-white text-center py-4">
                    Copyright © {currentYear}, Coding Factory. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;