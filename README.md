# Mohamed Ahmed Abdelwahab — Front-End Developer

A responsive personal portfolio built with HTML, CSS, and JavaScript. It includes project galleries, experience and education sections, a skills section, a typing title, and mobile navigation. It does not use a framework.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server. For example, with Python installed:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`.

## Media folders

Keep photos and image assets in `assets/images/` and video files in `assets/videos/`. The page references media from these folders.

Use descriptive `alt` text for meaningful photos. The project currently includes portrait, organization, project, and education images.

## Add project links

The project action buttons are hidden because no project URLs were provided. To add a real project URL, add it to the matching button's `href` in `index.html` and remove its `hidden` attribute. Do not add a link unless it is the real project or repository.

## Update social links

LinkedIn and WhatsApp are direct links in `index.html`. Add Facebook or Instagram only after you have the correct profile URLs. The email address is also in `index.html`.

## Update skills

Edit the lists in the Skills and Tools section in `index.html`. CCNA topics describe fundamentals and study areas, not a certification claim. The footer year updates automatically.