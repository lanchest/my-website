import streamlit as st
import streamlit.components.v1 as components
import os

st.set_page_config(
    page_title="王小明 | 個人作品集 & 全端開發者",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to make iframe full screen with zero margins
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .block-container {
            padding: 0rem !important;
            margin: 0rem !important;
            max-width: 100% !important;
        }
        iframe {
            width: 100vw !important;
            height: 100vh !important;
            border: none !important;
        }
    </style>
""", unsafe_allow_html=True)

# Read compiled standalone singlefile index.html
dist_dir = os.path.join(os.path.dirname(__file__), "dist")
index_path = os.path.join(dist_dir, "index.html")

if os.path.exists(index_path):
    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # Render component
    components.html(html_content, height=1400, scrolling=True)
else:
    st.error("dist/index.html 檔案未找到，請先建置專案。")
