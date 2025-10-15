import { Mail, Twitter, Linkedin, Instagram, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.png" width={32} height={32} alt="WiveZ Club Logo" />
                <span className="text-2xl font-bold font-headline">WiveZ Club</span>
            </Link>
            <p className="text-muted-foreground max-w-md font-body">
              Empowering women to connect, learn, and lead in the world of technology and beyond.
            </p>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 font-body">
              <a href="mailto:info@wivezclub.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                wavez1995@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" />https://www.facebook.com/profile.php?id=61581686022084</a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" />https://www.linkedin.com/in/wavez-club-34628738a</a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" />https://www.instagram.com/wavez.club</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} WaveZ Club. All rights reserved.
          </p>
          <Link href="https://www.djabersemaoui.site" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <BrainCircuit className="w-4 h-4" />
            <span>Djaber SEMAOUI</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
