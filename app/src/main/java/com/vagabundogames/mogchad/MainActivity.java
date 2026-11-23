package com.vagabundogames.mogchad;
import android.app.Activity;import android.os.Bundle;import android.webkit.WebView;
public class MainActivity extends Activity{
@Override protected void onCreate(Bundle b){super.onCreate(b);
WebView w=new WebView(this);w.getSettings().setJavaScriptEnabled(true);w.getSettings().setDomStorageEnabled(true);
w.loadUrl("file:///android_asset/index.html");setContentView(w);}
@Override public void onBackPressed(){finish();}}
