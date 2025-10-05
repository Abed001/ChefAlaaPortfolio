function Contact() {
  return (
 <div id="contact">
<section className="container py-5" id="contact">
  <h2 className="mb-4 text-center">Contact Me</h2>
  <form>
    <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Your name" required/>
    </div>

    <div className="mb-3">
      <label for="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="you@example.com" required/>
    </div>

    <div className="mb-3">
      <label for="message" className="form-label">Message</label>
      <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required/></textarea>
    </div>

    <button type="submit" className="btn btn-primary">Send Message</button>
  </form>
</section>
</div>)
}

export default Contact;
