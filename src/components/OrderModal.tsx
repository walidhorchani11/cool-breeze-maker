import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { sendTelegramNotification, OrderData } from "@/utils/telegram";

// Prix unitaire du ventilateur
const UNIT_PRICE = 25;

// Schéma de validation pour la commande
const orderSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string()
    .regex(/^(?:\+216|216)?[0-9]{8}$/, "Numéro de téléphone tunisien invalide")
    .transform(val => val.startsWith('+216') ? val : val.startsWith('216') ? `+${val}` : `+216${val}`),
  address: z.string().min(10, "L'adresse doit contenir au moins 10 caractères"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  note: z.string().optional(),
  quantity: z.number().min(1, "La quantité doit être au moins 1").max(10, "La quantité maximale est 10")
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderModalProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

const OrderModal = ({ children, triggerClassName }: OrderModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      address: "",
      email: "",
      note: "",
      quantity: 1
    }
  });

  // Calculer le prix total en fonction de la quantité
  const quantity = form.watch("quantity") || 1;
  const totalPrice = quantity * UNIT_PRICE;

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Données de commande:", data);
      
      // Convertir les données du formulaire en OrderData
      const orderData: OrderData = {
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        email: data.email || undefined,
        note: data.note || undefined,
        quantity: data.quantity
      };
      
      // Envoyer la notification Telegram
      const telegramSuccess = await sendTelegramNotification(orderData);
      
      if (telegramSuccess) {
        toast.success("🎉 Commande envoyée avec succès ! Nous vous contacterons bientôt.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.warning("⚠️ Commande reçue mais problème de notification. Nous vous contacterons.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
      
      setIsOpen(false);
      form.reset();
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast.error("❌ Erreur lors de l'envoi de la commande. Veuillez réessayer.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={triggerClassName}>
          {children}
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Commander Mon Ventilateur
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet *</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom complet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone *</FormLabel>
                  <FormControl>
                    <Input placeholder="+216 XX XXX XXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse de livraison *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Votre adresse complète" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantité *</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      max="10"
                      placeholder="1" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (optionnel)</FormLabel>
                  <FormControl>
                    <Input placeholder="votre@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note spéciale (optionnel)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Instructions de livraison..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span>Prix unitaire:</span>
                <span className="font-semibold">{UNIT_PRICE} dinars</span>
              </div>
              <div className="flex justify-between">
                <span>Quantité:</span>
                <span className="font-semibold">{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Sous-total:</span>
                <span className="font-semibold">{totalPrice} dinars</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison:</span>
                <span className="text-green-600 font-semibold">Gratuite</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{totalPrice} dinars</span>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Confirmer la commande"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal; 