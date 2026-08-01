{/* Simple Contact Card - DUPĂ (Funcțional) */}
<div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
    Înscrie-te Gratuit
  </h3>
  <p className="font-body text-sm text-muted-foreground mb-6">
    Completează câmpurile de mai jos și te vom contacta în cel mai scurt timp.
  </p>

  {/* ✅ 1. Folosim <form> cu endpoint-ul FormSubmit și metoda POST */}
  <form
    action="https://formsubmit.co/contact@aslan.ro"
    method="POST"
    className="flex flex-col gap-4"
  >
    {/* ✅ 2. Câmpuri ascunse de configurare (fără captcha, cu subiect personalizat) */}
    <input type="hidden" name="_captcha" value="false" />
    <input
      type="hidden"
      name="_subject"
      value="Cerere nouă împrumut carte - Biblioteca Aslan"
    />

    <div>
      <label className="font-display font-bold text-sm text-foreground block mb-1.5">
        Nume complet *
      </label>
      <input
        type="text"
        name="Nume complet" {/* ✅ 3. Adăugat 'name' și 'required' */}
        required
        placeholder="Ex: Ion Popescu"
        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>

    <div>
      <label className="font-display font-bold text-sm text-foreground block mb-1.5">
        Telefon *
      </label>
      <input
        type="tel"
        name="Telefon" {/* ✅ Adăugat 'name' și 'required' */}
        required
        placeholder="Ex: 0712 345 678"
        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>

    <div>
      <label className="font-display font-bold text-sm text-foreground block mb-1.5">
        Vârsta copilului (opțional)
      </label>
      <input
        type="text"
        name="Vârsta copil" {/* ✅ Adăugat 'name' */}
        placeholder="Ex: 12 ani"
        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>

    <div>
      <label className="font-display font-bold text-sm text-foreground block mb-1.5">
        Mesaj (opțional)
      </label>
      <textarea
        name="Mesaj" {/* ✅ Adăugat 'name' */}
        rows={3}
        defaultValue={defaultMessage}
        placeholder="Orice întrebare sau detaliu..."
        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
      />
    </div>

    <button
      type="submit" {/* ✅ 4. Schimbat în type="submit" */}
      className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-display font-bold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
    >
      Trimite Cererea
    </button>

    <p className="font-body text-xs text-muted-foreground text-center">
      Gratuitate garantată. Te contactăm în 24h.
    </p>
  </form>
</div>