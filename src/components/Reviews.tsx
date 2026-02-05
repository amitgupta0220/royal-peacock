import { site } from "../content/site";

export function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="grid2">
          <div>
            <h2 className="sectionTitle">Reviews</h2>
            <p className="sectionLead">
              Social proof matters. Once your Google Business Profile is ready, we can embed live reviews and rating.
            </p>

            <div className="rpReviewCard card">
              <div className="rpRating">{site.reviews.ratingText}</div>
              <div className="rpReviewNote">{site.reviews.note}</div>
            </div>
          </div>

          <div className="card rpQuote">
            <div className="rpQuoteText">
              “Great communication, sharp lines, and the house looked brand new. Clean jobsite every day.”
            </div>
            <div className="rpQuoteMeta">Sample review placeholder</div>
          </div>
        </div>
      </div>

      <style>{`
        .rpReviewCard{ padding: 18px; }
        .rpRating{
          font-family: var(--font-heading);
          letter-spacing: 0.6px;
          font-size: 22px;
          color: var(--rp-gold);
        }
        .rpReviewNote{ color: rgba(255,255,255,0.72); line-height: 1.7; margin-top: 10px; }
        .rpQuote{ padding: 22px; }
        .rpQuoteText{ font-size: 18px; line-height: 1.7; font-weight: 850; }
        .rpQuoteMeta{ color: rgba(255,255,255,0.70); margin-top: 12px; }
      `}</style>
    </section>
  );
}
