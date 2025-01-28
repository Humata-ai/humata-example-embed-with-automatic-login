<div align="center">
  <a href="https://app.humata.ai" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/588fc0a6-dfd2-4218-82d8-c782669716de">
    <img alt="Image" src="https://github.com/user-attachments/assets/588fc0a6-dfd2-4218-82d8-c782669716de" width="280"/>
  </picture>
  </a>
</div>

## Prerequisites

- [Install Deno](https://deno.com/)

## Running locally

#### 1. Clone this Repository and install packages

```
git clone https://github.com/Humata-ai/humata-example-embed-with-automatic-login

cd humata-example-embed-with-automatic-login

deno install
```

#### 2. Add Humata API key to the .env file

- Navigate to the [https://app.humata.ai/settings/developers](https://app.humata.ai/settings/developers) page.
- Enter a name for your API key and click the Create button.

  <img width="1395" alt="Image" src="https://github.com/user-attachments/assets/b881f467-5065-4430-9cae-8fea3420af9a" />

- Copy the generated API key and create an .env file as follows:

```
HUMATA_API_KEY=91230f....
```

<img width="677" alt="Image" src="https://github.com/user-attachments/assets/9697f3e7-85c8-410a-80d2-063019e10ef1" />

#### 3. Create share link

- Navigate to the file or folder for which you want to create a share link.

- Open the share link dialog by clicking the Share button and copy the generated share link.
  <img width="1490" alt="Image" src="https://github.com/user-attachments/assets/209f984c-39e9-41c3-a83a-680ded8f399a" />
  <img width="400" alt="Image" src="https://github.com/user-attachments/assets/988b2b09-454b-4ab0-bb57-ae33d64dfa40" />

- To restrict access to the share link, please email the link to either `dan@humata.ai` or `burak@humata.ai`. Our team will configure the necessary restrictions to ensure secure access.

#### 4. Replace placeholder datas

Replace `<SHARE_LINK>` in the `src/views/index.handlebars` with the created share link.

```html
<script>
  const shareLink = "<SHARE_LINK>"; // Replace this with the created share link.
  const iframe = document.querySelector("iframe");
  iframe.onload = () => {
    setTimeout(() => {
      iframe.contentWindow.postMessage(
        { token: "{{token}}" },
        "https://app.humata.ai"
      );
    }, 2000);
  };
  iframe.src = shareLink;
</script>
```

Update example user credentials in `src/index.ts`

```js
const USER = {
  first_name: "user",
  last_name: "example",
  email: "user@example.com",
};
```

#### 4. Run the app

```
deno run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
