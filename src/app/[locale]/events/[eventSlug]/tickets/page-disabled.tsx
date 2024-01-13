import { getTranslations } from "@/translations";

interface Product {
  slug: string;
  title: string;
  description: string;
  priceCents: number;
}

async function getProducts(eventSlug: string): Promise<Product[]> {
  return [
    {
      slug: "weekend",
      title: "Weekend ticket",
      description:
        "This ticket grants you access to the event for the whole weekend.",
      priceCents: 5000,
    },
    {
      slug: "friday",
      title: "Friday ticket",
      description:
        "This ticket grants you access to the event for Friday only.",
      priceCents: 2000,
    },
    {
      slug: "saturday",
      title: "Saturday ticket",
      description:
        "This ticket grants you access to the event for Saturday only.",
      priceCents: 4000,
    },
    {
      slug: "sunday",
      title: "Sunday ticket",
      description:
        "This ticket grants you access to the event for Sunday only.",
      priceCents: 3000,
    },
  ];
}

interface TicketsViewProps {
  params: {
    locale: string;
    eventSlug: string;
  };
}

export default async function TicketsView({
  params: { locale, eventSlug },
}: TicketsViewProps) {
  const translations = getTranslations(locale);
  const t = translations.TicketsView;
  const tCommon = translations.Common;
  const products = await getProducts(eventSlug);
  return (
    <div className="container mt-4">
      <h1 className="mb-4">{t.title}</h1>

      <table className="table table-striped mb-4">
        <thead>
          <tr className="row">
            <th className="col-8">{t.productsTable.product}</th>
            <th className="col">{t.productsTable.price}</th>
            <th className="col">{t.productsTable.quantity}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.slug} className="row">
              <td className="col-8">
                <p>
                  <strong>{product.title}</strong>
                </p>
                {product.description}
              </td>
              <td className="col">{product.priceCents / 100} €</td>
              <td className="col">
                <input type="number" className="form-control" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-4">
        <h2>{t.contactForm.title}</h2>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            {tCommon.formFields.firstName.title}
          </label>
          <input
            type="firstName"
            className="form-control"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            {tCommon.formFields.lastName.title}
          </label>
          <input
            type="lastName"
            className="form-control"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {tCommon.formFields.email.title}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            {tCommon.formFields.phone.title}
          </label>
          <input type="text" className="form-control" id="phone" name="phone" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="acceptTermsAndConditions"
            name="acceptTermsAndConditions"
            required={true}
          />
          <label
            className="form-check-label"
            htmlFor="acceptTermsAndConditions"
          >
            {t.acceptTermsAndConditions(
              "https://example.com/terms-and-conditions",
            )}
          </label>
        </div>
      </div>

      <div className="d-grid gap-2 mb-4">
        <button className="btn btn-primary btn-lg">
          {t.purchaseButtonText}
        </button>
      </div>
    </div>
  );
}
