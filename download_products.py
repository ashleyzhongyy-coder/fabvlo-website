#!/usr/bin/env python3
"""批量下载飞书网盘产品图片"""

import subprocess
import json
import os

# 产品文件夹映射
# 格式: (产品编号, 文件夹token, 分类)
products = [
    # 涤纶
    ("536", "NfL1fqHwTlx3QVdHysscVIWYnKb", "涤纶"),
    ("896", "FhUpf5rgvla5NldJEDscrYs4n9f", "涤纶"),
    ("685", "FD3CfoPo0lx05EdBkLNcgVTGn2g", "涤纶"),
    ("637", "IwBGfTRKEl8xl5dxeANc8Wc3nix", "涤纶"),
    ("547", "XRePfKOIklqUz4demzpcvtrOnmg", "涤纶"),
    ("614", "VtnjfTAymlmrSgde6nTc1sNFn5f", "涤纶"),
    ("797", "YTDFfa4K9lD5lWdUy49c7gzGnoc", "涤纶"),
    ("689", "YjpRf5eTslJUmUd3xkPcOdgpnIf", "涤纶"),
    # 涤棉混纺
    ("540", "IY8LfY31Rl30pgdzFLMcbQpAn5e", "涤棉混纺"),
    ("756", "LD1ffYeKll0bWhdC7lvcZ8iunzg", "涤棉混纺"),
    ("746", "SbWlfpP6jl2H44dpSWIcRVy8nYg", "涤棉混纺"),
    ("657", "Do2JfdpHql9uDfdQNc3cQ7iQnte", "涤棉混纺"),
    ("553", "QcIUf7TvElkVghdvFJYcBJCpnEg", "涤棉混纺"),
    ("796", "VPOff7LTPlZ7xkd0KuMccakRnHb", "涤棉混纺"),
    ("702", "VqcnfenuQljNnNdT7uOccNENnJb", "涤棉混纺"),
    ("852", "GgVJf8Ogyls35Fd4oXScEhdcnjh", "涤棉混纺"),
    ("818", "Vm9wfMHmllS5vVdkYwEcyURgnSg", "涤棉混纺"),
    ("526", "OUrsfsCcTlR9Sxd4sxscxF5Rnbq", "涤棉混纺"),
    # 全涤
    ("533", "XTlkf2SwvlFm50d2K47cY8gCn3e", "全涤"),
    ("846", "PajqfotGllM0Yqd5yJ5cNYKvntf", "全涤"),
    ("788", "IB5dfEB2Wljv7adL2NgcAaJonTb", "全涤"),
    ("865", "SjX2fD1jnlfiP0djjFkct7AJnoe", "全涤"),
    ("863", "OPWWfB83rlzlCxdvlQWc3hNbnkg", "全涤"),
    ("817", "L6CafuxbplaGvxd2ruKclu47nVW", "全涤"),
    ("530", "HULXf2ezelEHttdHB3Hc5GTknmc", "全涤"),
    ("529", "Day7fityRlnEMEdQeyVcYFiRnid", "全涤"),
    ("759", "SQPIfpKSFlehQZdAewccXTHcnec", "全涤"),
    ("532", "HULXf2ezelEHttdHB3Hc5GTknmc", "全涤"),
    # 待分类
    ("976", "BSGBf9fpWlPAZxdNMuzcMY1unsd", "待分类"),
    ("556", "B93mfBhwUl6QMOdLUtuc1OiGnYc", "待分类"),
    ("569", "OUrsfsCcTlR9Sxd4sxscxF5Rnbq", "待分类"),
    ("562", "WStkf0jS3lPZdIdKGZHc3bnTnob", "待分类"),
    ("545", "UaocfDQCwl8KMPd5v6zcjKranRf", "待分类"),
    ("593", "CvvkflrYAlcY1xdbW6gcyiU1nYd", "待分类"),
    ("加厚铜氨绒", "M5rQfHjS2l8yY4dd0Src1FS3n7i", "待分类"),
    ("斜纹磨毛", "PRwRfBx5alhsPPdiIW1cFoZynDf", "待分类"),
    ("953", "B6iDfWi3YlOTGwdwKaKcq5qPnXc", "待分类"),
    ("1010", "B6iDfWi3YlOTGwdwKaKcq5qPnXc", "待分类"),
]

output_dir = "/sessions/6a1c2196c0e81043922d5d95/workspace/fabvlo-website/images/products"

for product_id, folder_token, category in products:
    try:
        # 获取文件夹中的文件列表
        result = subprocess.run(
            ["lark-cli", "drive", "files", "list", 
             "--params", json.dumps({"folder_token": folder_token}),
             "--as", "user"],
            capture_output=True, text=True
        )
        
        data = json.loads(result.stdout)
        if data.get("code") == 0 and data.get("data", {}).get("files"):
            # 获取第一个图片文件
            files = data["data"]["files"]
            image_files = [f for f in files if f["type"] == "file" and 
                          any(f["name"].lower().endswith(ext) for ext in [".jpg", ".jpeg", ".png"])]
            
            if image_files:
                first_image = image_files[0]
                file_token = first_image["token"]
                output_file = os.path.join(output_dir, f"product-{product_id}.jpg")
                
                # 下载图片
                download_result = subprocess.run(
                    ["lark-cli", "drive", "+download",
                     "--file-token", file_token,
                     "--output", output_file,
                     "--as", "user"],
                    capture_output=True, text=True
                )
                
                download_data = json.loads(download_result.stdout)
                if download_data.get("ok"):
                    print(f"✅ 下载成功: {product_id} ({category})")
                else:
                    print(f"❌ 下载失败: {product_id} - {download_data.get('error', {}).get('message', '未知错误')}")
            else:
                print(f"⚠️ 没有图片: {product_id}")
        else:
            print(f"⚠️ 无法访问: {product_id}")
            
    except Exception as e:
        print(f"❌ 错误: {product_id} - {str(e)}")

print("\n下载完成！")
