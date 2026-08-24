# DNS Walkthrough — Mahaveer Varma

DNS (Domain Name System) is the naming system that helps the internet turn a human-friendly website name into the network address needed to reach the right service. It is similar to a contact list: people remember names, while computers ultimately need addresses.

### What happens when someone opens a website?

1. **The browser starts with the hostname.** If someone enters a site such as `mahaveervarma.netlify.app`, the browser needs to discover where that hostname is served.
2. **A resolver looks it up.** The device normally asks a recursive DNS resolver, often provided by an ISP, network, or public DNS service. The resolver checks its cache first. If it does not already know the answer, it follows the DNS hierarchy.
3. **Nameservers provide authoritative information.** The resolver can work through the root and top-level-domain DNS infrastructure until it reaches the authoritative nameserver responsible for the domain. That server stores the DNS records for the domain.
4. **A DNS record gives the destination.** Depending on the record type, the answer may contain an IP address or another hostname. The resolver returns the result to the device and caches it for the record's TTL (time to live).
5. **The browser connects to the host.** With the DNS answer available, the browser connects to the hosting service. For an HTTPS site, the browser also establishes a secure TLS connection and verifies the site's certificate before sending the web request.
6. **The host answers.** The hosting platform receives the request, finds the deployed site associated with that hostname, and returns the HTML, CSS, JavaScript, and other assets. The browser renders them as the page the visitor sees.

### What is a CNAME?

A **CNAME (Canonical Name) record** maps one hostname to another hostname. For example, a subdomain such as `www.example.com` can be configured as a CNAME pointing to a hosting provider's hostname. The DNS lookup follows that alias to find the destination. A CNAME is useful when the hosting provider controls the underlying destination and may change its infrastructure without requiring the site owner to hard-code an IP address.

A CNAME is different from an A record: an A record maps a hostname directly to an IPv4 address, while a CNAME maps one hostname to another hostname. DNS is therefore the directory layer; it does not itself deliver the webpage. After the name is resolved, the browser connects to the resulting service and requests the site.

For this assignment, a custom domain is not required. The important part is understanding the chain: **hostname → resolver → authoritative nameserver → DNS record → hosting service → HTTPS response → webpage**.
