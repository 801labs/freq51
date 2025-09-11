/**
 * Cloudflare Worker for Freq51 Documentation
 * Handles static asset serving and routing for the documentation site
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle root path - redirect to index.html
    if (url.pathname === '/') {
      url.pathname = '/index.html';
      return Response.redirect(url.toString(), 302);
    }
    
    // Get the asset from the ASSETS binding
    const asset = await env.ASSETS.fetch(new Request(url.toString(), request));
    
    // If asset exists, return it
    if (asset.status !== 404) {
      return asset;
    }
    
    // Handle SPA routing - serve index.html for any non-asset requests
    if (!url.pathname.includes('.')) {
      const indexAsset = await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin).toString()));
      if (indexAsset.status !== 404) {
        return indexAsset;
      }
    }
    
    // Return 404 for missing assets
    return new Response('Not Found', { status: 404 });
  },
};
