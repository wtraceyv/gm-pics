import React from "react";

function Instructions(props) {
  return (
    <div className="instructions">
      <div>
        <p className="step">1 - Grab Pictures</p>
        <p className="instructions-explain">
          Visit the applicable link, find the main bottle image and right click,
          'save image as' to your computer. This would be a good time to have
          already copied the proper name, so you can immediately save it as the
          correct filename (see below for how to format filenames).
        </p>
        <img src="/images/thorne-web-example.png" alt="Thorne Product Page" />
        <p className="instructions-explain">
          Copy the supplement facts image the same way. If the facts are not a
          picture you can save but they are on the page, take a screenshot of it
          and name appropriately. If there is a supplement facts image, but it
          is of the actual back of the bottle, save it just like the main bottle
          image and photoshop it exactly the same way as the main bottle image.
        </p>
      </div>
      <div>
        <p className="step">2 - Name Pictures</p>
        <p className="instructions-explain">
          Especially for adding new pictures, it is a good habit to name the
          image files according to some standard, which has usually been:
          "product-name_Vitamin-D_featured" for main bottle images, or
          "product-name_Vitamin-D_label" for the supplement facts. Notice that
          we put an underscore between the brand, product name, and type of pic.
          <br />
          <br />
          The Naming Tool on this site should help you generate these names
          easily, so you will not have to remember the rules too well, but to be
          quick it helps to generate these filenames first and just copy/paste
          them while you gather pics from step 1.
        </p>
      </div>
      <div>
        <p className="step">3 - Photoshop / Edit</p>
        <p className="instructions-explain">
          Thorne is a very good example of how we want to do pictures, so it is
          especially easy to add pictures for them and we actually use their
          pictures as a template.
          <br />
          <br />
          <p className="instructions-substep">Featured (main bottle) pics</p>
          Make sure you have access to the reference Thorne product image we
          use:
        </p>
        <img
          src="/images/thorne-vitamin-d-5000-featured.jpg"
          alt="Thorne Reference Pic"
        />
        <p className="instructions-explain">
          Assuming you are using Photoshop and logged in, drag the reference
          image in. Then drag the picture to be edited right on top of it, and
          adjust it to look as close to the same size/proportions as the
          reference picture. Delete the reference picture from the hierarchy in
          the bottom right so only the intended, resized picture is left.
        </p>
        <img
          src="/images/change-width-or-delete-layer.png"
          alt="Photoshop change width or delete layer"
        />
        <p className="instructions-explain">
          Once the picture is edited (correct size, cropped, rotated, whatever
          is needed), export the picture by going to File > Export > Save For
          Web (Legacy), and use the settings shown:
        </p>
        <img
          src="/images/export-settings.png"
          alt="Photoshop change width or delete layer"
        />
        <p className="instructions-explain">
          This is just trying to make sure that the background is always white,
          even if there is some transparency or something in the photo. At this
          point you can export (make sure the filename is still correct for that
          product).
          <p className="instructions-substep">Label (supplement fact) pics</p>
          Supplement facts are usually a bit easier and faster. Open the image
          directly in Photoshop (no reference). Edit the image's <i>width</i> to
          either 400px or 800px, whichever is closer to the current. The goal is
          also for the facts to be legible, obviously; if one size leaves the
          facts more legible than the others, or you have to retake a screenshot
          or something to attain legibility, then do that.
          <br />
          <br />
          Once the pic is resized, upright, and legible, follow the same steps
          for export. It should even leave the filename the same, so just make
          sure it arrives in the intended folder.
        </p>
      </div>
      <div>
        <p className="step">4 - Compress</p>
        <p className="instructions-explain">
          When all your images are named and edited, we want to compress them
          before uploading them to the site, to keep them small and fast to
          load. I was told to use <a href="https://kraken.io">kraken.io</a>, and
          it has always worked fine for me. Use the Web Interface page, and if
          you have to make an account to do this, go ahead; for our purposes it
          should remain free always.
        </p>
        <img src="/images/kraken.png" alt="Kraken Web Interface Screenshot" />
        <p className="instructions-explain">
          Whenever it finishes processing, download the whole zip and you now
          have your named images ready for the site.
        </p>
      </div>
      <div>
        <p className="step">5 - Add or Update WordPress Site</p>
        <p className="instructions-explain">
          <p className="instructions-substep">
            New Product (has no pictures yet)
          </p>
          These products should show up at the top of the list when you click
          products on the right of WordPress after logging in. If you press hold
          control+click the links, you can conveniently open all the products in
          their own pages.
          <br />
          <br />
          On a product page, scroll down to the empty Product Image spot on the
          right side of the page and use "Set product image" to add a bottle
          picture. Label images can be added further up the page, under Product
          Gallery, "Add product gallery images".
        </p>
        <div>
          <img
            src="/images/new-pic-wp.png"
            alt="Where users upload a new product bottle pic"
          />
        </div>

        <img
          src="/images/new-label-wp.png"
          alt="Where users upload a new product supplement facts"
        />
        <p className="instructions-explain">
          Drag your compressed and named image into the media window that pops
          up. This is your chance to put the accessibility tips in: for bottle
          images, on the right side after the picture loads, paste the sentence
          ending with "Bottle" in the alt input and the one ending with
          "Featured" in the Title. Click the bottom right button to save those
          changes (not in this screenshot):
        </p>
        <img
          src="/images/tag-and-upload-new-file.png"
          alt="Where users upload new product supplement facts"
        />
        <p className="instructions-explain">
          <br />
          <br />
          When you have added your images and returned to the product page, make
          sure you click the orange update button toward the top right of the
          page. If you return and it has a border line around it, it may not
          have updated and you should click it again to make sure the update is
          successful.
        </p>
        <p className="instructions-explain">
          <p className="instructions-substep">Image Updates</p>
          Featured (bottle) pics are really easy: click on the bottle picture
          where you would normally add one, then when it loads, choose to
          <i>replace</i> the image, under the "Upload a new file" button. Once
          that loads, just drag the new pic in and click "Upload". You will have
          to come back and hit an Update button when this is done, then once the
          Update is done, the picture should be updated.
        </p>
        <img
          src="/images/drag-replace-pic.png"
          alt="Where users upload new product supplement facts"
        />
        <p className="instructions-explain">
          <br />
          <br />
          The only difference for supplement facts is you will have to search
          for the right picture to replace. Click the link to add a label
          picture, and when that loads, paste the product name into the search
          bar of the media. If nothing (or the wrong thing) comes up, you may
          have to remove slashes, dashes, periods, etc., from the search for the
          thing you want to appear.
        </p>
        <img src="/images/gallery-search.png" alt="Label search" />
        <p className="instructions-explain">
          Once you choose a pic to replace, same process as for bottle pic
          updates. If you have a few valid options to replace, just pick one of
          them; in my experience, it seems to use whichever one you choose to
          replace (unless I'm just exceptionally lucky or something. Unlikely.).
        </p>
      </div>
      <div>
        <p className="step">Note</p>
        <p className="instructions-explain">
          Any changes you make — even after you successfully "update" — may not 
          be immediately visible even on the normal website on your browser, 
          because the old pictures are cached. If you need to check your work, 
          sometimes it is easier on your phone, which is more likely to grab 
          the new pictures.
        </p>
      </div>
      <div>
        <p className="step">~ Voilà ~</p>
      </div>
    </div>
  );
}

export default Instructions;
