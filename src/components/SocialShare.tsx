import { Share2, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialShareProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "lg" | "default" | "icon";
}

const SocialShare = ({ className = "", variant = "default", size = "default" }: SocialShareProps) => {
  // URLs des pages de la marque sur les réseaux sociaux
  const facebookPageUrl = "https://www.facebook.com/zydosicommerce"; // Remplacez par votre vraie page Facebook
  const instagramPageUrl = "https://www.instagram.com/zydosicommerce"; // Remplacez par votre vraie page Instagram
  const tiktokPageUrl = "https://www.tiktok.com/@zydosicommerce"; // Remplacez par votre vraie page TikTok
  
  // Masquer les boutons jusqu'à ce que les pages soient prêtes
  const showSocialButtons = false; // Changez à true quand les pages sont prêtes
  
  const openFacebookPage = () => {
    window.open(facebookPageUrl, '_blank');
  };

  const openInstagramPage = () => {
    window.open(instagramPageUrl, '_blank');
  };

  const openTikTokPage = () => {
    window.open(tiktokPageUrl, '_blank');
  };

  // Si les boutons sont masqués, ne rien afficher
  if (!showSocialButtons) {
    return null;
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button
        onClick={openFacebookPage}
        variant={variant}
        size={size}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </Button>
      
      <Button
        onClick={openInstagramPage}
        variant={variant}
        size={size}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
      >
        <Instagram className="w-4 h-4" />
        Instagram
      </Button>
      
      <Button
        onClick={openTikTokPage}
        variant={variant}
        size={size}
        className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white"
      >
        <span className="text-lg">🎵</span>
        TikTok
      </Button>
    </div>
  );
};

export default SocialShare; 