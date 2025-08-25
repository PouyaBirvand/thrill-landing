import { Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "../ui/Button";

export default function SocialIcons() {
    return (
        <div className="flex gap-4">
            <Button size="icon" rounded="full" variant="secondary" asChild>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <Send color="white" size="20" />
                </a>
            </Button>
            <Button size="icon" rounded="full" variant="secondary" asChild>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin color="white" size="20" />
                </a>
            </Button>
            <Button size="icon" rounded="full" variant="secondary" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram color="white" size="20" />
                </a>
            </Button>
        </div>
    )
}