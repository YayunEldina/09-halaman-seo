type FooterProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterProps){
    return <a className="transition hover:text-blue-500" href={url}>{text}</a>;
}

export default function Footer(){
    return(
        <footer className="pt-10 px-8 pb-16 border-t">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text="Tentang Saya" url="/" />
                    <FooterLink text="Proyek" url="/projects" />
                    <FooterLink text="Esai" url="/essays" />
                </div>
                <p className="text-sm text-zinc-400">© 2025 Yayun Eldina. All rights reserved.</p>
            </div>
        </footer>
    );
}